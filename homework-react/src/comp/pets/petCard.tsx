import './petCard.css'

interface PetProps {
    name: string
}

function PetCard({ name }: PetProps) {
    return (
        <div className="pet-card">
            <div className="pet-image">IMAGE</div>
            <p>{name}</p>
        </div>
    )
}

export default PetCard