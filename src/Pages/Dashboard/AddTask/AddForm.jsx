
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form"
const AddForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={{ textAlign: 'center', mb: 2, fontWeight: 'semibold', fontSize: '20px', }}>Add a task</Typography>
            <FormControl fullWidth className="space-y-3">
                <TextField
                    id="outlined-required"
                    label="Task Name"
                    fullWidth={true}
                    {...register('task', { required: true })}
                />
                <TextField
                    id="outlined-required"
                    label="Task Description"
                    fullWidth={true}
                    {...register('description', { required: true })}
                />
                <TextField
                    id="outlined-required"
                    label="Task Description"
                    fullWidth={true}
                    {...register('description', { required: true })}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Priority Level</InputLabel>
                    <Select
                        label="Priority Level"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={'low'}>Low</MenuItem>
                        <MenuItem value={'moderate'}>Moderate</MenuItem>
                        <MenuItem value={'high'}>High</MenuItem>
                    </Select>
                </FormControl>
            </FormControl>
        </form>
    );
};

export default AddForm;