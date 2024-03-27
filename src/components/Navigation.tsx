import { Anchor } from '@mantine/core';

export function Navigation(){
    return (
        <nav>
          <ul>
            <li>
              <Anchor href="https://mantine.dev/" target="_blank">Home</Anchor>
            </li>
            <li>
              <Anchor href="https://mantine.dev/" target="_blank">Products</Anchor>
            </li>
            <li>
              <Anchor href="https://mantine.dev/" target="_blank">About</Anchor>
            </li>
            <li>
              <Anchor href="https://mantine.dev/" target="_blank">Cart</Anchor>
            </li>
          </ul>
        </nav>
      );
    };

export default Navigation;
