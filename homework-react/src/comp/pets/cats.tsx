import PetCategory from './petCategory'

function Cats() {
    const cats = [
        { name: 'Lucky' },
        { name: 'Lucky' },
        { name: 'Lucky' },
        { name: 'Lucky' }
    ]

    return <PetCategory title="Cats" pets={cats} />
}

export default Cats