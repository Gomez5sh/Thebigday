from twilio.rest import Client 
# from celery import shared_task
# from celery.utils.log import get_task_logger

class Util:

    # @shared_task(bind=True, track_started=True)
    def send_sms(self, body, to):
        # logger = get_task_logger(__name__)
        account_sid = 'AC692352cdfe901c27f1813f75491b4796' + 'prueba' 
        auth_token = '2362829a755a7699a625420ab1f32172' 
        client = Client(account_sid, auth_token) 
        
        # message = client.messages.create(  
        #                             from_='+16789996078',
        #                             body=body,      
        #                             to='+57'+to
        #                         ) 
        # logger.info(message.sid)
        # logger.info('Sending sms to ' + to)