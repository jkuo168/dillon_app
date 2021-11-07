import React from "react";
import { Box } from "@mui/material";
import { Avatar, AvatarGroup } from "@mui/material";

export default function Facepile(props) {
  return (
    <Box>
     <AvatarGroup max={4}>
    <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/proxy/1DfNCyxwhDn5MuPaIt2j9s9aEAuU4sMP-wTvQ3Sbz8O8DPiamYdv3ZwcvxQCakpuCaiFRuGSvi-WK37Sbm_8kBqA7rHK9zWgcOplisK2Slw8ThR7xACqexIdxJcQreGc" />
    <Avatar alt="Travis Howard" src="https://nickgregan.com/wp-content/uploads/2009/09/Student-Headshots_4-%C2%A9-Nick-Gregan-Headshot-Photography.jpg" />
    <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScajKsGn4fCYZ1FHYfLnYYRmUPhiUi5d3Hkw&usqp=CAU" />
    {Array.from({ length: props.numEnrolled-3 }, (_, i) => <span key={i}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span>)}
    </AvatarGroup>

    </Box>
  );
}

