/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.chatapplication.chat;

import java.util.Collections;
import java.util.List;
import javax.annotation.security.RolesAllowed;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import com.mycompany.chatapplication.chat.domain.Chat;
import com.mycompany.chatapplication.chat.domain.Message;
import javax.annotation.Resource;
import javax.sql.DataSource;

import com.mycompany.chatapplication.chat.domain.User;
/**
 *
 * @author Eivind M
 */
@Stateless
@Path("chat")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class ChatService {
    
    @PersistenceContext
    EntityManager em;
    
     @Resource(mappedName="java:app/jdbc/chat")
    DataSource dataSource;
     
     @GET
    @Path("users")
    public List<User> getAllUsers() {
        return em.createQuery("select u from User u",User.class).getResultList();
    }
    
}
