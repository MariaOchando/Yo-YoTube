import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
        //if it has item.id.videoId, then it is a video.
        //if it has item.id.channelId, then it is a channel.
      ))}

    </Stack>
  )
}

export default Videos