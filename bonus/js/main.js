const {createApp} = Vue;

createApp({
    data(){
        return {
            activeChat: 0,
            newMsg: '',
            browseContacts: '',
            randomMsgs: [
               'Avanti! E non temete l’oscurità! Desti! Desti cavalieri di Théoden! Lance saranno scosse.. scudi saranno frantumati.. un giorno di spade! Un giorno rosso, prima che sorga il sole! Cavalcate ora! Cavalcate ora! Cavalcate per la rovina, e per la fine del mondo! Morte! Morte! Morte! Avanti, Eorlingas!',
               'Io ne ho viste cose che voi umani non potreste immaginarvi',
               'Si... può... fare!',
               'Che cos/è il genio? È fantasia, intuizione, decisione e velocità d/esecuzione.',
               'Svegliati, Neo. Matrix... ha te... Segui il Coniglio Bianco...',
               'Jack, ti prego! Sono solo un povero sindaco che fa il suo mestiere! Non posso prendere le decisioni tutto da solo!',
               'Però quanto a te, quanto a quello che non puoi fare che tu, per te qualcosa da poter fare dovrebbe esserci. Non ti costringerà nessuno. Pensa da te stesso, decidi da te stesso che cosa adesso tu stesso debba fare.',
               'Salve, sono Troy McClure! Forse vi ricorderete di me per...',
               'Anche il capitano del Titanic lo diceva: "Ma no, ma no, è solo un rumorino! Da niente!" ',
               'Ti sembro scontento, Johnny? Minchia, Carabbaggio!' 
            ],
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
                            message: 'Ciao Claudia, hai novità?',
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
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
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
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
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
                
            let rightNow = now.toTimeString();

            let rightNowMaProprioNow = rightNow.slice(0,8);

            if(!this.emptyStringValidation(this.newMsg)){

                this.contacts[index].messages.push(
                    {
                        date: '10/01/2020 ' + rightNowMaProprioNow, 
                        message: this.newMsg, 
                        status: 'sent'
                    }
                );

                setTimeout(() => this.contactAnswers(index), 2000);
            }

                
            this.newMsg = '';
                
                
        },
        contactAnswers(index){

            let now = new Date();
                
            let rightNow = now.toTimeString();

            let rightNowMaProprioNow = rightNow.slice(0,8)

            // if(newMsg.length > 0){

                this.contacts[index].messages.push(
                    {
                        date: '10/01/2020 ' + rightNowMaProprioNow, 
                        message: this.randomMsgs[this.numberGenerator()], 
                        status: 'received'
                    }
                );

            // }

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

        },
        numberGenerator(){

            return Math.floor(Math.random() * 10);
            

        },
        emptyStringValidation(string){
            
            return /^\s*$/.test(string)

        }
        
    },
    mounted(){
        this.numberGenerator();
    }
}).mount('#app')