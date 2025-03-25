import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const services = [
    {
        title: "Technical Workshops",
        image: "https://github.com/Montassar-Bousselmi/site-IMC/blob/48826d096587c9998cd0d78d8c9854dd9e990c8c/public/components/workshops.png?raw=true",
        description: "Professional web development services to build modern and responsive websites."
    },
    {
        title: "Training Programs",
        image: "https://github.com/Montassar-Bousselmi/site-IMC/blob/48826d096587c9998cd0d78d8c9854dd9e990c8c/public/components/training.png?raw=true",
        description: "Creative graphic design solutions for branding, marketing, and digital presence."
    },
    {
        title: "Consulting Services",
        image: "https://github.com/Montassar-Bousselmi/site-IMC/blob/48826d096587c9998cd0d78d8c9854dd9e990c8c/public/components/consulting.png?raw=true",
        description: "Enhance your website’s visibility with expert SEO strategies and analytics."
    }
];

function Services() {
    const [selectedService, setSelectedService] = useState(1);

    const handleServiceClick = (index) => {
        setSelectedService(index);
    };

    const reorderServices = () => {
        if (selectedService === 1) return services;
        const newOrder = [...services];
        const selectedItem = newOrder.splice(selectedService, 1)[0];
        newOrder.splice(1, 0, selectedItem);
        return newOrder;
    };

    const reorderedServices = reorderServices();

    return (
        <div>
            <h2 className='s'>Services</h2>
            <div className="services-container">
                <AnimatePresence mode="popLayout">
                    {reorderedServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className={`service-card ${index === 1 ? 'selected' : ''}`}
                            onClick={() => handleServiceClick(services.indexOf(service))}
                            layout
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            <img src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Services;
