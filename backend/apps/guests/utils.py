from twilio.rest import Client 


class Util:

    def send_sms(body, to):

        account_sid = 'AC692352cdfe901c27f1813f75491b4796' + 'prueba' 
        auth_token = '2362829a755a7699a625420ab1f32172' 
        client = Client(account_sid, auth_token) 
        
        message = client.messages.create(  
                                    from_='+16789996078',
                                    body=body,      
                                    to='+57'+to
                                ) 
        print(message.sid)

