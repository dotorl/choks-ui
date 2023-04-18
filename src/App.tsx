import React from 'react';
import { useState } from 'react';
import './App.css';
import { Avatar, AvatarGroup, AvatarNestedItem } from './components/Avatar';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>HI</h1>

      <Avatar
        size="4"
        alt="John Smith"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        fallback="J"
        status="green"
      />

      <AvatarGroup>
        <AvatarNestedItem>
          <Avatar
            size="2"
            alt="John Smith"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="J"
          />
        </AvatarNestedItem>
        <AvatarNestedItem>
          <Avatar
            size="2"
            alt="John Smith"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="J"
          />
        </AvatarNestedItem>
        <AvatarNestedItem>
          <Avatar
            size="2"
            alt="John Smith"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="J"
          />
        </AvatarNestedItem>
        <AvatarNestedItem>
          <Avatar
            size="2"
            alt="John Smith"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="J"
          />
        </AvatarNestedItem>
      </AvatarGroup>

      <br />

      <div style={{ display: 'flex', gap: 20 }}>
        <AvatarPrimitive.Root className="AvatarRoot">
          <AvatarPrimitive.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <AvatarPrimitive.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
        <AvatarPrimitive.Root className="AvatarRoot">
          <AvatarPrimitive.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
          />
          <AvatarPrimitive.Fallback className="AvatarFallback" delayMs={600}>
            JD
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
        <AvatarPrimitive.Root className="AvatarRoot">
          <AvatarPrimitive.Fallback className="AvatarFallback">
            PD
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
      </div>
    </div>
  );
}

export default App;
