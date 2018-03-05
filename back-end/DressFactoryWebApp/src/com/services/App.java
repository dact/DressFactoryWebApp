package com.services;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;


public class App extends Application{

    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<Class<?>>();
        addRestResourceClasses(classes);
        return classes;
    }
     
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(DescFactorys.class);
    }
}
