import { forwardRef } from "react";
import { Group, Avatar, Text, Select, Burger, Kbd } from "@mantine/core";
import React, { FC } from "react";
import "../../common.css";
import { ExampleAppData } from "../ExampleData";
import "./Menu.css";
import { Search } from "tabler-icons-react";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  logoUrl: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ logoUrl, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={logoUrl} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

export interface MenuProps {
    showMenu?: boolean;
}

export const Menu: FC<MenuProps> = ({
    showMenu = false
}) => {
  return (
    <div className="menu-wrapper">
      {!showMenu 
        ? <></> 
        : <Burger size={27} color={'white'} opened={false} className="menu-icon" />}
      <div className="menu-search-wrapper">
        <div className="menu-search">
          <Select
            placeholder="Search"
            searchable
            maxDropdownHeight={420}
            nothingFound="No apps found 🤔"
            data={ExampleAppData}
            size="lg"
            radius="md"
            transition="pop-top-left"
            transitionDuration={80}
            transitionTimingFunction="ease"
            itemComponent={SelectItem}
            className="search"
            rightSection={<>
              <Kbd sx={{
                backgroundColor: '#373a3f',
                border: '1px solid #373a3f',
                color: '#c0c2c5'
              }}>⌘</Kbd>&nbsp;+&nbsp;<Kbd sx={{
                backgroundColor: '#373a3f',
                border: '1px solid #373a3f',
                color: '#c0c2c5'
              }}>K</Kbd>
            </>}
            rightSectionWidth={80}
            styles={{
              dropdown: { color: 'var(--grey)', backgroundColor: 'var(--background)', border: 'solid 2px #373a47', borderRadius: '8px' },
              item: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              hovered: { color: 'white', backgroundColor: 'var(--background)' },
              disabled: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              selected: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              nothingFound: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              separator: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              separatorLabel: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              wrapper: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              defaultVariant: { color: 'var(--grey)', backgroundColor: 'var(--background)', border: 'solid 2px #373a47', borderRadius: '8px' },
              filledVariant: { color: 'var(--grey)', backgroundColor: 'var(--background)', border: 'solid 2px #373a47', borderRadius: '8px' },
              unstyledVariant: { color: 'var(--grey)', backgroundColor: 'var(--background)', border: 'solid 2px #373a47', borderRadius: '8px' },
              input: { color: 'white' },
              rightSection: { color: 'var(--grey)' },
            }}
            clearable
            allowDeselect
          />
        </div>
      </div>
    </div>
  );
};
