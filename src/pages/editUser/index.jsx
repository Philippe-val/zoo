import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../utils/userService";


const EditUser = () => {

    const id = useParams();
    const [user, setUser] = useState(null);
    let actualUser = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const API_URL = "http://localhost:3000";

    useEffect(() => {
        let data;

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${API_URL}/api/readOneUser?id=${id}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response);
                setUser(response.data.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(user);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id !== undefined || user.role === "admin") {
            //let errorMessage = null;
            const token = actualUser.token;
            user.userId = id;
            let data = { user };
            data = JSON.stringify(data);
            console.log(data);
            let config = {
                method: "put",
                maxBodyLength: Infinity,
                url: `${API_URL}/api/updateUser`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: data,
            };

            axios
                .request(config)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        console.log("Response succeeded!");
                        toast.success("Modification validée");
                        userService.update();
                        setTimeout(() => {
                            navigate("/backUser");
                        }, 3000);
                    }
                })
                .catch((error) => {
                    const errorMessage = error.response ? error.response.data.message || 'An error occurred' : 'An error occurred';
                    toast.error(errorMessage);
                    // Utilisez la variable error ici, si nécessaire
                });

        } else {
            const errorMessage =
                "Vous ne disposez pas des droits pour cette modification";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="main">
            <h2>Mes informations personnelles</h2>

            <form onSubmit={handleSubmit}>
                
               
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        aria-label="Entrez votre adresse email"
                        className="inputField"
                        type="email"
                        name="email"
                        value={user && user.email}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="inputGroup">
                        <label className="inputLabel" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            aria-label="Entrez votre mot de passe"
                            className="inputField"
                            type="password"
                            name="password"
                            placeholder="Entrez votre mot de passe ou un nouveau"
                            onChange={handleInputChange}
                            required="required"
                        />
                    </div>
                </div>
                <button className="button" type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditUser;