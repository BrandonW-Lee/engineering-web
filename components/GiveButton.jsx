"use client";

import React from "react";

import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Script from "next/script";

export default function GiveButton() {
  return (
    <>
      <Button
        className='tithely-give-btn h-10 w-50'
        data-church-id='411909'
      >
        <Mail className='mr-2 h-4 w-4 rounded-full' />
        Give
      </Button>
      <Script
        src='https://tithe.ly/widget/v3/give.js?3'
        onLoad={() => {
          create_tithely_widget();
        }}
      />
    </>
  );
}
