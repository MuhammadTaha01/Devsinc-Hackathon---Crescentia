import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Card className="h-[100vh] w-[250px] flex flex-col pl-1 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" className='font-bold text-[30px]'>
          PMS
        </Typography>
      </div>
      <List>
        <ListItem 
          className="flex items-center gap-3 mb-10 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5 cursor-pointer" />
          </ListItemPrefix>
          <Typography>Dashboard</Typography>
        </ListItem>
        <ListItem 
          className="flex items-center gap-3 mb-7 cursor-pointer" 
          onClick={() => navigate('/register-patient')}
        >
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography>Register Patient</Typography>
        </ListItem>
        <ListItem className="flex items-center gap-3 mb-12 cursor-pointer">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography>Inbox</Typography>
          <ListItemSuffix>
            <Chip size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="flex items-center gap-3 mb-12 cursor-pointer">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography>Profile</Typography>
        </ListItem>
        <ListItem className="flex items-center gap-3 mb-12 cursor-pointer">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography>Settings</Typography>
        </ListItem>
        <ListItem className="flex items-center gap-3 mb-12 cursor-pointer">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Typography>Log Out</Typography>
        </ListItem>
      </List>
    </Card>
  );
};

export default Navbar;
