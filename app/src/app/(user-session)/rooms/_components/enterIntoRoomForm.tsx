'use client'

import React, { useState, useEffect } from 'react';
import { addPlayerToRoom } from '../../../_repositories/roomsRepository'
import { useRouter } from 'next/navigation';

const generateRandomCode = (): string => {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
};

const generateRandomName = (): string => {
    const names = ["Carlinhos95", "PlayerOne", "GamerGirl", "NinjaWarrior", "Speedster"];
    return names[Math.floor(Math.random() * names.length)];
};

const EnterIntoRoomForm: React.FC = () => {
    const [nickname, setNickname] = useState<string>('');
    const [roomCode, setRoomCode] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        setNickname(generateRandomName());
        setRoomCode(generateRandomCode());
    }, []);

    return (
        <form 
            action={addPlayerToRoom} 
            className="w-3/4 bg-gray-100 px-4 py-5 rounded-lg max-w-[300px] max-h-[350px] mx-auto"
        >
            <div className="mb-5">
                <label htmlFor="nickname-input" className="block text-sm font-medium text-gray-700">
                    Your Nickname
                </label>
                <input
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    id="nickname-input"
                    name="nickname"
                    placeholder={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="room-name-input" className="block text-sm font-medium text-gray-700">
                    Room Code
                </label>
                <input
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    id="room-name-input"
                    name="roomCode"
                    placeholder={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                />
            </div>
            <div className="modal-footer mb-3">
                <button type="submit" className="w-full h-12 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                    Enter The Room
                </button>
            </div>
        </form>
    );
};

export { EnterIntoRoomForm };
