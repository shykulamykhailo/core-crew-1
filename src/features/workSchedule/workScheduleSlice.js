import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    fetchWorkSchedule,
    updateWorkSchedule,
} from '../../services/apiWorkSchedule';

const initialState = {
    schedule: [],
    status: 'idle',
    error: null,
};

export const loadSchedule = createAsyncThunk(
    'workSchedule/loadSchedule',
    async (month) => {
        const data = await fetchWorkSchedule(month);

        return data;
    }
);

export const saveSchedule = createAsyncThunk(
    'workSchedule/saveSchedule',
    async (updatedSchedule) => {
        console.log('call from slice');
        await updateWorkSchedule(updatedSchedule);
        return updatedSchedule;
    }
);

const workScheduleSlice = createSlice({
    name: 'workSchedule',
    initialState,
    reducers: {
        toggleDayStatus: (state, action) => {
            const { userId, day } = action.payload;
            const userSchedule = state.schedule.find(
                (u) => u.user_id === userId
            );
            if (userSchedule) {
                userSchedule.schedule[day] = !userSchedule.schedule[day];
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSchedule.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadSchedule.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.schedule = action.payload;
            })
            .addCase(loadSchedule.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(saveSchedule.fulfilled, (state) => {
                state.status = 'succeeded';
            });
    },
});

export const { toggleDayStatus } = workScheduleSlice.actions;

export default workScheduleSlice.reducer;
