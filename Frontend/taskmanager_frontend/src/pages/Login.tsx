import React from 'react';

const Login: React.FC = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8000/auth/google';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-sm p-8 border border-gray-200 rounded-lg shadow-sm text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to Task Manager</h1>
                <p className="text-sm text-gray-500 mb-8">Login with your Google account to continue</p>
                <button
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
