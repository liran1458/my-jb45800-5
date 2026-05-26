import PetCard from './petCard'
import './petCategory.css'

interface Pet {
    name: string
}

interface PetCategoryProps {
    title: string
    pets: Pet[]
}

function PetCategory({ title, pets }: PetCategoryProps) {
    return (
        <section className="pet-category">
            <h2>{title}</h2>

            <div className="pets-grid">
                {pets.map((pet, index) => (
                    <PetCard key={index} name={pet.name} />
                ))}
            </div>
        </section>
    )
}

export default PetCategory