"use client"
import { YoutubeIcon } from '../Util/Icon'

export default function YoutubeButton() {
    return(
        <button className="flex items-center justify-center text-center m-8 p-8 w-24 bg-transparent backdrop-blur-2xl dark:border-red-800 rounded-md border border-slate-600 shadow-lg hover:shadow-red-600 overflow-hidden">
            <YoutubeIcon />
        </button>
    );
}