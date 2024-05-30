import { Dispatch, FormEvent, SetStateAction } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
    timer: 3000,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
})

interface FormData extends EventTarget {
    name: HTMLFormElement;
    email: HTMLFormElement;
    message: HTMLFormElement;
}

export const handleSubmit = (e: FormEvent<HTMLFormElement>, setLoading: Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault();
    const data = e.target as FormData;
    let name = data.name.value;
    let email = data.email.value;
    let message = data.message.value;

    console.log("sent");
    
    setLoading(true);
    
    fetch("https://formsubmit.co/ajax/096ed27e352117ae0a9d9e91094e4ad2", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => {
        console.log(response);
        
        setLoading(false);
        data.name.value = "";
        data.email.value = "";
        data.message.value = "";
        
        if(response.ok){
            return response.json();
        } else {
            return Toast.fire({
                icon: "error",
                text: `Error ${response.status}: ${response.statusText}`
            })
        }
    })
    .then(data => {
        Toast.fire({
            icon: "success",
            text: data.message
        })
    })
    .catch(error => {
        setLoading(false);

        console.log(error);
        
        return Toast.fire({
            icon: "error",
            text: `Error: ${error.message}`
        })
    });
}