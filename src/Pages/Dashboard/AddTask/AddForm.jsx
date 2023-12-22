
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from "@mui/x-date-pickers";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import dayjs from "dayjs";

const AddForm = () => {
    const [priority, setPriority] = useState('2022-04-17T15:30');

    // const handleChange = (event) => {
    //     setPriority(event.target.value);
    // };

    const [value, setValue] = React.useState(dayjs(''));

    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const task = {
            title: data.task,
            description: data.description,
            dateTime: data.date,
            priority: priority
        }
        console.log(task);
        axiosPublic.post('/addTask', task)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <Typography sx={{ textAlign: 'center', mb: 2, fontWeight: 'semibold', fontSize: '20px', }}>Add a task</Typography>
            <FormControl fullWidth>
                <TextField
                    id="outlined-required"
                    label="Task Name"
                    fullWidth={true}
                    type="text"
                    {...register('task', { required: true })}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    id="outlined-required2"
                    label="Task Description"
                    fullWidth={true}
                    type="text"
                    {...register('description', { required: true })}
                />
            </FormControl>
            <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker
                            label="Controlled picker"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            {...register('date', { required: true })}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Priority Level</InputLabel>
                <Select
                    label="Priority Level"

                    value={priority}
                    {...register('priority', { required: true })}
                    sx={{ color: 'black' }}
                    onChange={e => setPriority(e.target.value)}
                >
                    <MenuItem value={'low'}>Low</MenuItem>
                    <MenuItem value={'moderate'}>Moderate</MenuItem>
                    <MenuItem value={'high'}>High</MenuItem>
                </Select>
            </FormControl>

            <input type="submit" value={'Submit'} className="btn" />
            {/* </input> */}
        </form>
    );
};

export default AddForm;