/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const HeaderBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      aria-label="Header"
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
      {...props}
    >
      {children}
    </Box>
  );
};

export default HeaderBox;
