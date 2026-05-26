import PetCategory from './petCategory'

function Dogs() {
    const dogs = [
        { name: 'Lucky' },
        { name: 'meow' },
        { name: 'moshe' },
        { name: 'Lucky' }
    ]

    return <PetCategory title="Dogs" pets={dogs} />
}

export default Dogs