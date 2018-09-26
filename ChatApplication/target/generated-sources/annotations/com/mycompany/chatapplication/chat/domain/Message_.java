package com.mycompany.chatapplication.chat.domain;

import com.mycompany.chatapplication.chat.domain.Chat;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2018-09-26T08:56:35")
@StaticMetamodel(Message.class)
public class Message_ { 

    public static volatile SingularAttribute<Message, Chat> chat;
    public static volatile SingularAttribute<Message, Long> id;
    public static volatile SingularAttribute<Message, String> text;
    public static volatile SingularAttribute<Message, String> user;

}