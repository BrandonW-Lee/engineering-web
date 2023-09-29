'use client';

import React from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

export default function GiveButton() {
  return (
    <Button
      className="tithely-give-btn"
      data-church-id="411909"
      onClick={() => {
        create_tithely_widget();
      }}
    >
      <Mail className="mr-2 h-4 w-4" />
      Give
    </Button>
  );
}
