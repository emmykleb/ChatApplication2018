/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.chatapplication.chat.domain;

import java.io.Serializable;
import javax.persistence.Id;

/**
 *
 * @author Eivind M
 */
public class User implements Serializable {
    @Id
    String userid;
    
    
     public User(String userid) {
        super();
        this.userid = userid;
    }
    
}
