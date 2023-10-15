export interface gptData {
    'index': number,
    'message': {
        'role': string,
        'content': string
    }, 
    'finish_reason': string
}

export interface itinerary {
    'trip': {
        'itinerary': {
            'day': string,
            'date': string,
            'activities': {
                'locationName': string,
                'address': string
            }[]
        }
    }
}