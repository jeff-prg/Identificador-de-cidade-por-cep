const axios = require('axios')

const cepCidade = async (cep) => {
    if (cep.length !== 8) {
        console.error('O CEP deve ter exatamente 8 dígitos')
        return
    }
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        console.log(`O cep informado corresponde a cidade: ${response.data.city} - ${response.data.state}`)
    } catch (error) {
        console.error('Erro ao obter informações do CEP')
    }
}

// Exemplo de uso
cepCidade('20210900')