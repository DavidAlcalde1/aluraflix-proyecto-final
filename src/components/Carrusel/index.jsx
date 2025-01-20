// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import { Pagination, Navigation } from "swiper";
// import { CardVideo } from '../CardVideo';
// import { useContext } from 'react';
// import { Contexto } from '../../Contexto';
// import { eliminarVideo } from '../../services/videos.services';  //Agregado

// export function Carrusel({categoria_id, color}) {
//     const datos = useContext(Contexto);
//     const videos = datos.videos.filter((dato) => dato.categoria+'' === ''+categoria_id );
    
//     // const actualizar = () => {

//     // };

//     // const eliminar = (id) => {
//     //     return eliminarVideo(id)
//     //         .then(() => {
//     //             actualizar();
//     //         });
//     // };
    
    
//     return (
//         <Swiper
//             spaceBetween={16}
//             slidesPerView={1}
//             breakpoints={{
//                 768: {
//                     slidesPerView: 2,
//                 },
//                 1024: {
//                     slidesPerView: 4,
//                 },
//             }}
//             // loop={true}
//             pagination={{
//                 clickable: true,
//             }}
//             navigation={true}
//             modules={[Pagination, Navigation]}
//         >
//             {
//                 videos.map((video, indice) => {
//                     return (
//                         <SwiperSlide  key={indice} >
//                             <CardVideo link={video.link_video} src={video.link_imagen} color={color} />
//                         </SwiperSlide>
//                     );
//                 })
//             }
//         </Swiper>
//     );
// }



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/swiper-bundle.min.css';
import { Pagination, Navigation } from "swiper";

import { CardVideo } from '../CardVideo';
import { useContext } from 'react';
import { Contexto } from '../../Contexto';
// import { eliminarVideo } from '../../services/videos.services';


export function Carrusel({ categoria_id, color }) {
    const datos = useContext(Contexto);
    const videos = datos.videos.filter((dato) => dato.categoria+'' === ''+categoria_id );

    const actualizar = () => {
        
    };

    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            {
                videos.map((video, indice) => {
                    return (
                        <SwiperSlide key={indice}>
                            <CardVideo
                                id={video.id}
                                link={video.link_video}
                                src={video.link_imagen}
                                color={color}
                                actualizar={actualizar}
                            />
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
}