"use client";
import { Avatar } from '@radix-ui/themes';

export default function AvatarComponent() {
  return (
    <>
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
      />
      <Avatar fallback="A" />
    </>
  );
}
