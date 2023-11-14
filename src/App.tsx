import React from 'react';
import { useState } from 'react';
import { Avatar, AvatarGroup, AvatarNestedItem } from './components/Avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/Accordion';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Button } from './components';
import { AppBar } from './components/Appbar';
import SampleTypoGraphy from './sample/typography';
import SampleColors from './sample/Colors';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>HI</h1>

      <SampleTypoGraphy />

      <SampleColors />

      <AppBar color="accent">
        <Button>accent</Button>
      </AppBar>
      <AppBar size="5" color="plain">
        <Button>plain</Button>
      </AppBar>
      <AppBar size="10" color="loContrast" border sticky glass>
        <Button>loContrast</Button>
      </AppBar>

      <h2> 16 / 9 </h2>
      <div style={{ width: '300px' }}>
        <AspectRatio.Root ratio={16 / 9}>
          <img
            className="Image"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AspectRatio.Root>
      </div>

      <h2> 9 / 16 </h2>
      <div style={{ width: '300px' }}>
        <AspectRatio.Root ratio={9 / 16}>
          <img
            className="Image"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AspectRatio.Root>
      </div>

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

      <p></p>

      <div>
        {/* <Heading id="accordion" css={{ mb: '$6', scrollMarginTop: '$7' }}>
          Accordion
        </Heading> */}
        <h2 className={'text-violet-500'}>Accordion</h2>
        <Accordion type="single">
          <AccordionItem value="accordion-one">
            <AccordionTrigger>
              <span>Accoridion One</span>
            </AccordionTrigger>
            <AccordionContent>
              <span>
                The other main improvement is with tables, which we ll probably
                use a lot. With horizontal overflow on small devices and when
                zoomed in, tables are a pain to navigate. I added a focus
                wrapper that will announce the table context to the user when
                focused, which also allows keyboard users to navigate the
                overflow more easily.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accordion-two">
            <AccordionTrigger>
              <span className={'text-violet-500'}>Accoridion two</span>
            </AccordionTrigger>
            <AccordionContent>
              <span>
                The other main improvement is with tables, which we ll probably
                use a lot. With horizontal overflow on small devices and when
                zoomed in, tables are a pain to navigate. I added a focus
                wrapper that will announce the table context to the user when
                focused, which also allows keyboard users to navigate the
                overflow more easily.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accordion-three">
            <AccordionTrigger>
              <span>Accoridion three</span>
            </AccordionTrigger>
            <AccordionContent>
              <span>
                The other main improvement is with tables, which we ll probably
                use a lot. With horizontal overflow on small devices and when
                zoomed in, tables are a pain to navigate. I added a focus
                wrapper that will announce the table context to the user when
                focused, which also allows keyboard users to navigate the
                overflow more easily.
              </span>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accordion-four" className={'bg-white mx-6'}>
            <AccordionTrigger>
              <span>Accoridion four</span>
            </AccordionTrigger>
            <AccordionContent className={'p-0'}>
              <p></p>
              <span>
                The other main improvement is with tables, which we ll probably
                use a lot. With horizontal overflow on small devices and when
                zoomed in, tables are a pain to navigate. I added a focus
                wrapper that will announce the table context to the user when
                focused, which also allows keyboard users to navigate the
                overflow more easily.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
