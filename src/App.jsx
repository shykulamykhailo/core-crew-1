import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Management from './pages/Management';
import GlobalStyles from './styles/GlobalStyles';
import CreateNewProduct from './features/productsOperations/createProduct/CreateNewProduct';
import InvoicesPage from './features/productsOperations/invoices/InvoicesPage';
import Profile from './pages/Profile';
import WriteOffPage from './features/productsOperations/writeOffList/WriteOffPage';
import LoginComponent from './features/authentication/Login';
import ProtectedRoute from './ui/ProtectedRoute';
import RedirectIfAuthenticated from './ui/RedirectIfAuthenticated';
import { Toaster } from 'react-hot-toast';
import TablePoductsList from './features/productsOperations/productsData/TablePoductsList';
import Schedule from './pages/Schedule';
import MainPage from './pages/MainPage';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route
                            element={
                                <ProtectedRoute>
                                    <AppLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route
                                index
                                element={<Navigate replace to="main" />}
                            />
                            <Route path="management" element={<Management />}>
                                <Route
                                    path="products"
                                    element={<TablePoductsList />}
                                />
                                <Route
                                    path="create-new-product"
                                    element={<CreateNewProduct />}
                                />
                                <Route
                                    path="invoices-page"
                                    element={<InvoicesPage />}
                                />

                                <Route
                                    path="write-off-page"
                                    element={<WriteOffPage />}
                                />
                            </Route>
                            <Route path="main" element={<MainPage />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="schedule" element={<Schedule />} />
                        </Route>
                        <Route
                            path="login"
                            element={
                                <RedirectIfAuthenticated>
                                    <LoginComponent />
                                </RedirectIfAuthenticated>
                            }
                        />
                    </Routes>
                </BrowserRouter>
                <Toaster
                    position="top-center"
                    hutter={12}
                    containerStyle={{ margin: '8px' }}
                    toastOptions={{
                        success: {
                            duration: 3000,
                        },
                        error: {
                            duration: 5000,
                        },
                        style: {
                            fontSize: '16px',
                            maxWidth: '500px',
                            padding: '16px 24px',
                            backgroundColor: 'var(--color-grey-0)',
                            color: 'var(--color-grey-700)',
                        },
                    }}
                />
            </PersistGate>
        </Provider>
    );
}

export default App;
