import { Imagen } from "../UI/Estilos";
import styled from "styled-components";
import { actualizarVideo, eliminarVideo } from "../../services/videos.services";
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const CardVideoLink = styled.a`
    display: block;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const CarruselImagen = styled(Imagen)`
    border: 1px solid ${({color}) => color };
    box-sizing: border-box;
    border-radius:10px;
    box-shadow: 5px 5px  ${({color}) => color };
    object-fit: cover;
    width: 100%;
    height: 180px;
`;

const ButtonContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${({ color }) => color};
    color: black;
    &:hover {
        opacity: 0.8;
    }
`;




// export function CardVideo({link, src, color, onEdit, onDelete, eliminarVideo}) {
//     return (
//         <div> 
//         <CardVideoLink href={link} target="__blank" >
//             <CarruselImagen src={src} color={color} ></CarruselImagen>
//         </CardVideoLink>
//         <ButtonContainer>
//             <Button color={color} onClick={onEdit} >Edit</Button>
//             {/* <Button color={color} onClick={onDelete} eliminar={eliminarVideo}>Delete</Button> */}
//             <Button color={color} >Delete</Button>
//         </ButtonContainer>        
//         </div>
//     );    
// }






// export function CardVideo({ id, link, src, color, actualizar }) {
//     const handleEdit = () => {
//         console.log(`Edit button clicked for video id: ${id}`);
//         const nuevosDatos = { /* nuevos datos del video */ };
//         actualizarVideo(id, nuevosDatos)
//             .then(() => {
//                 console.log(`Video with id: ${id} updated successfully`);
//                 actualizar();
//             })
//             .catch((error) => {
//                 console.error(`Error updating video with id: ${id}`, error);
//             });
//     };

//     const handleDelete = () => {
//         console.log(`Delete button clicked for video id: ${id}`);
//         eliminarVideo(id)
//             .then(() => {
//                 console.log(`Video with id: ${id} deleted successfully`);
//                 actualizar();
//             })
//             .catch((error) => {
//                 console.error(`Error deleting video with id: ${id}`, error);
//             });
//     };

//     return (
//         <div> 
//             <CardVideoLink href={link} target="__blank" >
//                 <CarruselImagen src={src} color={color} ></CarruselImagen>
//             </CardVideoLink>
//             <ButtonContainer>
//                 <Button color={color} onClick={handleEdit}>Edit</Button>
//                 <Button color={color} onClick={handleDelete}>Delete</Button>
//             </ButtonContainer>        
//         </div>
//     );    
// }



export function CardVideo({ id, link, src, color, actualizar }) {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/video/${id}`); // Redirige a la página de edición del video
    };

    const handleDelete = () => {
        console.log(`Delete button clicked for video id: ${id}`);
        eliminarVideo(id)
            .then(() => {
                console.log(`Video with id: ${id} deleted successfully`);
                actualizar();
            })
            .catch((error) => {
                console.error(`Error deleting video with id: ${id}`, error);
            });
    };

    return (
        <div>
            <CardVideoLink href={link} target="__blank">
                <CarruselImagen src={src} color={color}></CarruselImagen>
            </CardVideoLink>
            <ButtonContainer>
                <Button color={color} onClick={handleEdit} >Edit</Button>
                <Button color={color} onClick={handleDelete}>Delete</Button>
            </ButtonContainer>
        </div>
    );
}



// export function CardVideo({ video, eliminar, actualizar,color }) {
//     const { id, titulo, enlace_imagen } = video;

//     const handleDelete = (e) => {
//         e.stopPropagation();
//         eliminar(id)
//             .then(() => {
//                 actualizar();
//             });
//     };

//     return (
//         <CardVideoLink href={`/video/editar/${id}`}>
//             <CarruselImagen src={enlace_imagen} alt={titulo} color={color} />
//             <h3>{titulo}</h3>
//             <ButtonContainer>
//                 <Button color="red" onClick={handleDelete}>
//                     <DeleteIcon sx={{ color: 'white' }} />
//                 </Button>
//                 <Link to={`/video/editar/${id}`}>
//                     <Button color="#FFA500">
//                         <EditIcon sx={{ color: 'white' }} />
//                     </Button>
//                 </Link>
//             </ButtonContainer>
//         </CardVideoLink>
//     );
// }