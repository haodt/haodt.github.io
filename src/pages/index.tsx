import styled, { x } from "@xstyled/styled-components";
import { Github, FileDown, Send, Linkedin } from "lucide-react";

const Container = styled(x.div)`
  height: 100vh;
`;

const Button = styled(x.a)`
  padding: 4;
  border-radius: 4;
  background-color: primary-500;
  color: white;
`;

export default function Home() {
  return (
    <Container container="sm" mx="auto" display="flex" alignItems="center">
      <x.div display="grid" gridTemplateColumns="2" columnGap="8">
        <x.div>
          <x.h1 text="8xl" mb="4" fontWeight="bold">
            hi, I&apos;m <x.span color="primary-500">Hao</x.span>
          </x.h1>
          <x.p text="lg" mb="4">
            Meet me, a passionate software developer from Viet Nam, who loves
            everything related to programming. My current interests lie in
            Elixir and Functional Programming.
          </x.p>
          <x.p text="lg" mb="4">
            I am experienced in developing and deploying web applications using
            various frameworks such as React, Nextjs, Ruby on Rails, PHP, and
            Node.js
          </x.p>
          <x.div display="flex">
            <Button href="https://github.com/haodt" mr={4}>
              <Github />
            </Button>
            <Button
              href="https://www.linkedin.com/in/the-hao-doan-72405471/"
              mr={4}
            >
              <Linkedin />
            </Button>
            <Button href="mailto: haodt1990@gmail.com" mr={4}>
              <Send />
            </Button>
            <Button
              href="https://gist.github.com/haodt/5722ae3d1decda6d953f597e9e1031ed/raw/7a41a1f2cc3a742f16136ea05f058d967cc0b3d7/resume.pdf"
              target="_blank"
              mr={4}
            >
              <FileDown />
            </Button>
          </x.div>
        </x.div>
        <x.div></x.div>
      </x.div>
    </Container>
  );
}
