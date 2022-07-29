import React, { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, UnstyledButton, createStyles, Badge } from '@mantine/core';
import { Icon as TablerIcon, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { HashLink } from 'react-router-hash-link';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 400,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: 'white',
    fontSize: theme.fontSizes.lg,

    '&:hover': {
      backgroundColor: 'var(--solworks-background)',
      color: theme.white,
      borderRadius: '6px',
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
    color: '#797f91',
    borderLeft: `1px solid ${theme.colors.dark[4]}`,
    font: 'Roboto',
    border: 0,

    '&:hover': {
      backgroundColor: 'var(--solworks-background)',
      color: theme.white,
      borderRadius: '6px',
      border: 0,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; comingSoon?: boolean }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === 'ltr' ? ChevronRight : ChevronLeft;
  const items = (hasLinks ? links : []).map((link) => MenuSubLink(classes, link));

  if (!hasLinks) {
    return (
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <HashLink smooth to={`/#${label.toLocaleLowerCase()}`} className="link">
          <Group position="apart" spacing={0}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon variant="outline" size={32} sx={{ color: 'white', border: '0' }}>
                <Icon size={22} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </Group>
        </HashLink>
      </UnstyledButton>
    );
  }

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="outline" size={32} sx={{ color: 'white', border: '0' }}>
              <Icon size={22} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
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
function MenuSubLink(
  classes: Record<'control' | 'link' | 'chevron', string>,
  link: { label: string; link: string; comingSoon?: boolean }
): JSX.Element {
  return (
    <HashLink className={classes.link} key={link.label} smooth to={link.link}>
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
    </HashLink>
  );
}
