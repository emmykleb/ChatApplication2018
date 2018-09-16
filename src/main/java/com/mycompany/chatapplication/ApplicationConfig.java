/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.chatapplication;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author Eivind M
 */
@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    
    public static void main(String[] args) {
        System.out.println("Starting chat server");
    }

    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(com.mycompany.chatapplication.ChatService.class);
    }
    
}
