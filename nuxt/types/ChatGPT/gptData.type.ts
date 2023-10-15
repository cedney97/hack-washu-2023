export interface gptData {
    'index': number,
    'message': {
        'role': string,
        'content': string
    }, 
    'finish_reason': string
}