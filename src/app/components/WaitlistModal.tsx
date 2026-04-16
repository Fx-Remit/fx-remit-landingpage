'use client';

import React, { useState } from 'react';
import { useWaitlist } from '../context/WaitlistContext';

export const WaitlistModal = () => {
    const { isWaitlistOpen, closeWaitlist } = useWaitlist();
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    if (!isWaitlistOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('https://formspree.io/f/mgorapqw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    closeWaitlist();
                    setIsSubmitted(false);
                    setEmail('');
                }, 3000);
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setErrorMessage(data.errors.map((error: any) => error.message).join(', '));
                } else {
                    setErrorMessage('Oops! There was a problem submitting your email. Please try again.');
                }
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={closeWaitlist}
            />
            <div className="relative bg-white rounded-3xl p-8 md:p-12 w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200 slider-entrance">
                <button
                    onClick={closeWaitlist}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="mb-8 mt-2">
                    <h3 className="text-[28px] font-bold text-[#1C1C1C] mb-3">You're early! 🎉</h3>
                    <p className="text-[#3D3D3D] text-[16px]">Drop your email below and we'll let you know the exact minute V2 drops.</p>
                </div>

                {isSubmitted ? (
                    <div className="bg-[#E8F5E9] text-[#2E7D32] p-6 rounded-2xl border border-[#C8E6C9] flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="font-semibold text-lg">You're on the list!</p>
                            <p className="text-sm">Keep an eye on your inbox.</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {errorMessage && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100">
                                {errorMessage}
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="user@example.com"
                                required
                                className="w-full px-6 py-4 rounded-xl border border-[#E5E5E5] text-[#1C1C1C] outline-none focus:border-[#2261FE] focus:ring-4 focus:ring-[#2261FE]/10 transition-all text-[16px] bg-[#F9F9F9]"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#1C1C1C] hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-[16px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Joining...
                                </>
                            ) : (
                                "Get Early Access"
                            )}
                        </button>
                    </form>
                )}
                <p className="text-center text-[12px] text-gray-500 mt-6">
                    By joining, you agree to our Privacy Policy.
                </p>
            </div>
        </div>
    );
};
