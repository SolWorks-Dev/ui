import React, { useEffect, useState } from 'react';
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  createStyles,
  Badge,
} from '@mantine/core';
import { Icon as TablerIcon, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => ({
  control: {
    fontWeight: 400,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? 'white' : '#002B67',
    border: theme.colorScheme === 'dark' ? 'solid 2px transparent' : 'solid 2px white',
    fontSize: theme.fontSizes.lg,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? 'var(--solworks-background)' : 'var(--lm-selected-menu)',
      border: theme.colorScheme === 'dark' ? 'solid 2px var(--solworks-background)' : 'solid 2px var(--lm-selected-menu-border)',
      color: theme.colorScheme === 'dark' ? 'white' : '#002B67',
      borderRadius: theme.colorScheme === 'dark' ? '6px' : '20px 0 0 20px',
      [`& .${getRef('label')}`]: {
        color: theme.colorScheme === 'dark' ? 'white' : '#002B67',
      },
    },
  },
  link: {
    fontWeight: 400,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.md,
    color: theme.colorScheme === 'dark' ? '#797f91' : '#002B67',
    borderLeft: `1px solid ${theme.colors.dark[4]}`,
    font: 'Roboto',
    border: 'solid 2px transparent',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? 'var(--solworks-background)' : 'var(--lm-selected-menu)',
      border: theme.colorScheme === 'dark' ? 'none' : 'solid 2px var(--lm-selected-menu-border)',
      color: theme.colorScheme === 'dark' ? 'white' : '#002B67',
      borderRadius: theme.colorScheme === 'dark' ? '6px' : '20px 0 0 20px',
    },
  },
  chevron: {
    transition: 'transform 200ms ease',
  },
  icon: {
    color: theme.colorScheme === 'dark' ? 'white' : '#002B67',
    border: 'none',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    color: theme.colorScheme === 'dark' ? 'white' : '#002B67',
    ref: getRef('label')
  }
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened: boolean;
  links?: { label: string; link: string; comingSoon?: boolean }[];
  hideMenu?: () => void;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  hideMenu,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened);
  const ChevronIcon = theme.dir === 'ltr' ? ChevronRight : ChevronLeft;
  const [items, setItems] = useState<JSX.Element[]>();

  useEffect(() => {
    if (links) {
      setItems(links.map((link) => MenuSubLink(classes, link, hideMenu)));
    }
  }, [opened]);

  if (!hasLinks) {
    return (
      <UnstyledButton className={classes.control} onClick={hideMenu}>
        <HashLink smooth to={`/#${label.toLocaleLowerCase()}`} className="link">
          <Group position="apart" spacing={0}>
            <Box className={classes.iconWrapper}>
              <ThemeIcon variant="outline" size={32} className={classes.icon}>
                <Icon size={22} />
              </ThemeIcon>
              <Box ml="md" className={classes.label}>{label}</Box>
            </Box>
          </Group>
        </HashLink>
      </UnstyledButton>
    );
  } else {
    return (
      <>
        <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
          <Group position="apart" spacing={0}>
            <Box className={classes.iconWrapper}>
              <ThemeIcon variant="outline" size={32} className={classes.icon}>
                <Icon size={22} />
              </ThemeIcon>
              <Box ml="md" className={classes.label}>{label}</Box>
            </Box>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size={18}
                style={{
                  transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
                }}
              />
            )}
          </Group>
        </UnstyledButton>
        <Collapse in={opened}>{items}</Collapse>
      </>
    );
  }
}

function MenuSubLink(
  classes: Record<'control' | 'link' | 'chevron', string>,
  link: { label: string; link: string; comingSoon?: boolean; external?: boolean },
  hideMenu?: () => void
): JSX.Element {
  const contents = (
    <Group position="apart">
      {link.label}
      {link.comingSoon ? (
        <Badge
          size="md"
          radius="sm"
          variant="gradient"
          gradient={{ from: 'violet', to: 'red' }}
          style={{
            paddingRight: '8px',
          }}
        >
          🛠️
        </Badge>
      ) : (
        <></>
      )}
    </Group>
  );

  if (link.external) {
    return (
      <a
        className={classes.link}
        href={link.link}
        target="_blank"
        rel="noreferrer"
        onClick={hideMenu}
      >
        {contents}
      </a>
    );
  } else {
    return (
      <Link className={classes.link} key={link.label} to={link.link} onClick={hideMenu}>
        {contents}
      </Link>
    );
  }
}
