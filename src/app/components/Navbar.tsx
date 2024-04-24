"use client";
import React from "react";
import Link from "next/link";



const Navbar = () =>{
    return(
        <div className="flex justify-between bg-teal-500 text-teal-100">
            <Link href = "/"><h1 className="px-20 py-8 font-semibold cursor-pointer">KhataBookProjec name</h1></Link>
          <ul className="px-20 py-8 flex space-x-10 font-semibold">
            <div>
                <Link href="/">
                    <li className="cursor-pointer hover:underline underline-offset-8">Home</li>
                </Link>

            </div>
            <div>
                <Link href="/aboutus">
                    <li className="cursor-pointer hover:underline underline-offset-8">About Us</li>
                </Link>
            </div>
            <div>
                <Link href="/contactus">
                    <li className="cursor-pointer hover:underline underline-offset-8">Contact us</li>
                </Link>
            </div>
            
            <div>
                <Link href="/login/login">
                    <li className="cursor-pointer hover:underline underline-offset-8">Login</li>
                </Link>
            </div>
            <div>
                <Link href="/login/register">
                    <li className="cursor-pointer hover:underline underline-offset-8">Register</li>
                </Link>
            </div>
          </ul>
        </div>
    );   
}

export default Navbar;
