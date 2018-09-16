package com.mycompany.chatapplication;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

/**
 *
 * @author Eivind M
 */
@Path("chat")
@Stateless
public class ChatService {
    @PersistenceContext
    EntityManager em;
    
    @GET
    public List<Message> getAllMessages()  {
        return em.createQuery("select m from Message m",Message.class).getResultList();
    }
    
    @GET
    @Path("create")
    public Message create(@QueryParam("message")String message) {
        Message result = new Message(message);
        
        em.persist(result);
        
        return result;
    }
}
