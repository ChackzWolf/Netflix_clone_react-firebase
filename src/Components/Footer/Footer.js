import React from "react";
import { FaYoutube,FaTwitter,FaInstagram,FaFacebook } from "react-icons/fa";

export const Footer = ()=>{
    return(
        <div className="ml-60 mt-24">
            <div className="flex gap-7">
                <FaYoutube className="text-white text-2xl"/>
                <FaFacebook className="text-white text-2xl"/>
                <FaTwitter className="text-white text-2xl"/>
                <FaInstagram className="text-white text-2xl"/>
            </div>
            <div className="flex gap-20">
                <ul className="text-gray-400 text-xs">
                    <li className="my-3">Audio Description</li>
                    <li className="my-3">Investor Relations</li>
                    <li className="my-3">Legal Notice</li>
                </ul>
                <ul className="text-gray-400 text-xs">
                    <li className="my-3">Help Center</li>
                    <li className="my-3">Jobs</li>
                    <li className="my-3">Cookie Preferences</li>
                </ul>
                <ul className="text-gray-400 text-xs">
                    <li className="my-3">Gift Cards</li>
                    <li className="my-3">Terms of Use</li>
                    <li className="my-3">Corporate Information</li>
                </ul>
                <ul className="text-gray-400 text-xs">
                    <li className="my-3">Media Center</li>
                    <li className="my-3">Privacy</li>
                    <li className="my-3">Contact Us</li>
                </ul>
            </div>
            <div>
                <button className="opacity-80 text-white border border-gray-500 w-20 text-xs h-7 my-5"> Service Code </button>
            </div>
        </div>
    )
}
