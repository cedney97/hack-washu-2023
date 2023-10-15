export interface gptData {
    'index': number,
    'message': {
        'role': string,
        'content': string
    }, 
    'finish_reason': string
}

export interface gptResponse {
    'trip': {
        'itinerary':{
            'activities':{
                'address': string,
                'locationName': string
            }[]
            'date': string,
            'day': number
        }[]
    }
}