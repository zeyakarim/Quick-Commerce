'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { ExpandLess, ExpandMore, Collections, Home, LiveTv } from '@mui/icons-material';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Collapse } from '@mui/material';

const drawerWidth = 240;

const NAVIGATION = [
    {
        segment: 'overview',
        title: 'Overview',
        icon: <Home />,
    },
    {
        segment: 'channels',
        title: 'Channels',
        icon: <LiveTv />,
        children: [
            {
                segment: 'metaads',
                title: 'Meta Ads'
            },
            {
                segment: 'googleads',
                title: 'Google Ads'
            },
            {
                segment: 'quickcommerce',
                title: 'Quick Commerce'
            },
        ],
    },
    {
        segment: 'creatives',
        title: 'Creatives',
        icon: <Collections />,
    },
];

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
            background: {
            default: '#f5f5f5',
        },
    },
});

const Skeleton = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
}));

const DashboardContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    width: '100%',
    padding: theme.spacing(3),
}));

const Row = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
}));

const Column = styled('div')(({ width, theme }) => ({
    flex: width ? `0 0 calc(${width} - ${theme.spacing(3)})` : '1',
    minWidth: '200px',
    [theme.breakpoints.down('sm')]: {
        flex: '1 0 100%',
    },
}));

const Navbar = () => {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openItems, setOpenItems] = useState({});

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleItemClick = (segment) => {
        setOpenItems(prev => ({ ...prev, [segment]: !prev[segment] }));
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>
                {NAVIGATION.map((item) => (
                    <div key={item.segment}>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => item.children ? handleItemClick(item.segment) : router.push(`/${item.segment}`)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                                {item.children && (openItems[item.segment] ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton>
                        </ListItem>
                        {item.children && (
                            <Collapse in={openItems[item.segment]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.children.map((child) => (
                                        <ListItem key={child.segment} disablePadding>
                                            <ListItemButton 
                                                sx={{ pl: 4 }} 
                                                onClick={() => router.push(`/${child.segment}`)}
                                            >
                                                <ListItemIcon>{child.icon}</ListItemIcon>
                                                <ListItemText primary={child.title} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </div>
                ))}
            </List>
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ 
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    {/* <Toolbar /> */}
                    <DashboardContainer>
                        <Row>
                            <Column width="66.66%">
                                <Skeleton sx={{ height: 300 }} />
                            </Column>
                            <Column width="33.33%">
                                <Skeleton sx={{ height: 300 }} />
                            </Column>
                        </Row>

                        <Row>
                            <Column width="25%">
                                <Skeleton sx={{ height: 150 }} />
                            </Column>
                            <Column width="25%">
                                <Skeleton sx={{ height: 150 }} />
                            </Column>
                            <Column width="25%">
                                <Skeleton sx={{ height: 150 }} />
                            </Column>
                            <Column width="25%">
                                <Skeleton sx={{ height: 150 }} />
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Skeleton sx={{ height: 400 }} />
                            </Column>
                        </Row>

                        <Row>
                            <Column width="50%">
                                <Skeleton sx={{ height: 250 }} />
                            </Column>
                            <Column width="50%">
                                <Skeleton sx={{ height: 250 }} />
                            </Column>
                        </Row>
                    </DashboardContainer>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Navbar;