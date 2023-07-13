import React from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

export default function GiveButton() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" />
      Give
    </Button>
  );
}
