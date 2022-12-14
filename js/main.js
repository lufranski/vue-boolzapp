const {createApp} = Vue;

createApp({
    data(){
        return {
            activeChat: 0,
            newMsg: '',
            browseContacts: '',
            // isOpen: false,
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'imgs/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'imgs/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'imgs/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'imgs/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'imgs/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'imgs/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'imgs/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'imgs/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            isOver: false,
                            isOpen: false,
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        chatSwapper(chatIndex){
            
            this.activeChat = chatIndex;
            
        },
        addNewMsg(index){
            
            let now = new Date();
                
            console.log(now);

            let rightNow = now.toTimeString();

            console.log(rightNow , rightNow.length);

            let rightNowMaProprioNow = rightNow.slice(0,8);

            console.log(rightNowMaProprioNow);

            this.contacts[index].messages.push(
                {
                    date: '10/01/2020 ' + rightNowMaProprioNow, 
                    message: this.newMsg, 
                    status: 'sent'
                }
            );
                
            this.newMsg = '';
                
            setTimeout(() => this.contactAnswers(index), 2000);
                
        },
        contactAnswers(index){

            let now = new Date();
                
            let rightNow = now.toTimeString();

            let rightNowMaProprioNow = rightNow.slice(0,8)

            this.contacts[index].messages.push(
                {
                    date: '10/01/2020 ' + rightNowMaProprioNow, 
                    message: 'Oke', 
                    status: 'received'
                }
            );

        },
        convertInputToLowerCase(){

            return this.browseContacts.toLowerCase();

        },
        convertContactToLowerCase(contact){

            return contact.name.toLowerCase();

        },
        onHover(message){

            message.isOver = true; 

        },
        onLeave(message){

            message.isOver = false;
            message.isOpen = false;

        },
        deleteMsg(deleteIndex){

           this.contacts[this.activeChat].messages.splice(deleteIndex, 1);

        }
        
    }
}).mount('#app')