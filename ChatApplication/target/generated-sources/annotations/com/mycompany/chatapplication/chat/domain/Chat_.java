package com.mycompany.chatapplication.chat.domain;

import com.mycompany.chatapplication.chat.domain.Message;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2018-09-26T08:56:35")
@StaticMetamodel(Chat.class)
public class Chat_ { 

    public static volatile ListAttribute<Chat, Message> messages;
    public static volatile SingularAttribute<Chat, String> id;

}