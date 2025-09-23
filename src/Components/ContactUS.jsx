import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from "@mui/material"
import { useFormik } from 'formik';
import * as Yup from 'yup'

const ContactUS = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            message: ""
        },
        validationSchema:Yup.object({
            firstName:Yup.string().required("This is Required"),
            lastName:Yup.string().required("This is Required"),
            phone:Yup.string().required("This is Required"),
            message:Yup.string().required("This is Required"),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });
    
  return (
    <>
      <Typography variant="h4" mt={6} mb={6}>Contact US</Typography>

      <Box component="form" onSubmit={formik.handleSubmit}>

      <TextField label="First Name" type="text" variant="outlined" sx={{width: "300px", m: 1}} name="firstName" 
      onChange={formik.handleChange} error={formik.touched.firstName && Boolean(formik.errors.firstName)} 
      helperText={formik.touched.firstName && formik.errors.firstName} onBlur={formik.handleBlur}/>

      <TextField label="Last Name" type="text" variant="outlined" sx={{width: "300px", m: 1}} name="lastName" 
      onChange={formik.handleChange} error={formik.touched.lastName && Boolean(formik.errors.lastName)} 
      helperText={formik.touched.lastName && formik.errors.lastName} onBlur={formik.handleBlur}/>

      <TextField label="Phone No." type="number" variant="outlined" sx={{width: "300px", m: 1}} name="phone" 
      onChange={formik.handleChange} error={formik.touched.phone && Boolean(formik.errors.phone)} 
      helperText={formik.touched.phone && formik.errors.phone} onBlur={formik.handleBlur}/>

      <TextField label="Message" type="text" variant="outlined" multiline rows={4} fullWidth name="message" 
      onChange={formik.handleChange} error={formik.touched.message && Boolean(formik.errors.message)} 
      helperText={formik.touched.message && formik.errors.message} onBlur={formik.handleBlur} sx={{marginLeft: "9px"}}/>

      <Button size='large' variant='contained' type='submit' color="secondary" sx={{m: 1}}>Send</Button>
      </Box>
    </>
  )
}

export default ContactUS
