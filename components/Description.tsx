import {Grid} from '@material-ui/core'
import {Box, Button} from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Descirption = () => {
  return (
  <Box sx={{my: 1}}>
    <Grid container alignItems="center" justify="center" direction='column'>
      <Grid item xs={12}>
        <div>
          被害発見！ 写真のアップロードはこちらから！
        </div>
      </Grid>
      <Grid item xs={12}>
        <Link href="/upload">
          <Button variant='contained' >アップロード画面</Button>
        </Link>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Descirption

