import React from 'react';
import * as yup from 'yup';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';


const errorMsg = {
    name: 'Name is required',
    email: 'Email is required',
    password: 'Password is required',
    confirmPasword: 'Password must match',
};

const formSchema = yup.object().shape({
    name:yup.string().required(errorMsg.name).min(4).label('Name'),
    email_address: yup.string().email(errorMsg.email).required(),
    password: yup.string().required(errorMsg.password),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], errorMsg.confirmPasword)
        .required(errorMsg.confirmPasword),
})


class AddDailog extends React.Component {
constructor() {
    super();
    this.state = {
        name: '',
        email_address:'',
        password: '',
        passwordConfirmation: '',
        openDialog: false,
        error: [],
    };
}
handleChange = field => (event) => {
    this.setState({[field]:event.target.value},
        () => this.handleValidate((field)));
}
handleValidate = (e) => {
    console.log('=================event=====>', e.target.value);
    const { name, email_address, password } = this.state;
    console.log('=================name=====>', name);
    
    formSchema.validate(
        { name, email_address, password },
        {abortEarly:false},
    )
    .then(() => {
        // this.
        console.log('success');
    })
    .catch((error) => {
        this.setState({ error: error.errors });
        // const { error } = this.state;
        console.log('error ', error);
        // this.setState({

        // })
    });
  }
// handleValidateEmail = (event) => {
//     const { email_address } = this.state;
//     formSchema.validate(
//         { email_address },
//         {abortEarly:false},
//     )
//     .then(() =>{
//         console.log('email is validate');
//     })
//     .catch((err) => {
//         console.log('errnvnc===============================>', err);
        
//     })
// }
// handleValidatePassword = (event) => {
//     const { password } = this.state;
//     formSchema.validate(
//         { password },
//         {abortEarly:false},
//     )
//     .then(() =>{
//         console.log('password is validate');
//     })
//     .catch((err) => {
//         console.log('errnvnc===============================>', err);
//         // this.setState({errorName: err.error.messa})
//     })
// }
handleClickOpenDialog = () => {
const { openDialog } = this.state;
this.setState({
    openDialog: !openDialog
})
}

handleClickCloseDialog = () => {
    const { openDialog } = this.state;
this.setState({
    openDialog: !openDialog
})
}
    render() {
        const { openDialog, error } = this.state;
     const { title, button1, button2 } = this.props;
     console.log('erroro::::::;;', error);
        return (
            <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpenDialog}>
                   ADD Trainee
            </Button>
                <Dialog 
                 open={openDialog}
                  >
                    <DialogTitle>{title} </DialogTitle>
                    {/* <DialogContent>{content}</DialogContent> */}
                    <DialogContent>
                        <TextField
                        variant="outlined"
                        label="Name"
                        onBlur= {this.handleValidate}
                        error={error.includes(errorMsg.name)}
                        required="required"
                        helperText={<p> {error.includes(errorMsg.name) ? errorMsg.name : ''} </p>}
                         />
                         <TextField variant="outlined"
                         type="email"
                         onBlur={this.handleValidate}
                         label="Email"
                         error={error.includes(errorMsg.email)}
                         helperText={<p> </p>} />
                          <TextField variant="outlined"
                         type="password"
                         onBlur={this.handleValidate}
                         label="Password" />
                          <TextField variant="outlined"
                         type="password"
                         label="Confirm Password" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClickCloseDialog} >
                            {button1}
                        </Button>
                        <Button onClick={this.handleValidate} >{button2} </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default AddDailog;
