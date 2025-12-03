package br.com.pg360.api.controller;

import br.com.pg360.api.model.Evento;
import br.com.pg360.api.repository.EventoRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/eventos")

@Tag(name = "Eventos", description = "Endpoints para gerenciamento de eventos da cidade")
@CrossOrigin("http://localhost:5173")

public class EventoController {

    @Autowired
    private EventoRepository repository;

    @Operation(
            summary = "Criar novo evento",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    content = @Content(schema = @Schema(implementation = Evento.class))
            )
    )
    @PostMapping
    public ResponseEntity<Evento> criar(@RequestBody Evento evento) {
        return ResponseEntity.status(201).body(repository.save(evento));
    }

    @GetMapping
    public List<Evento> listarTodos() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "dtInicioEvento"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Atualizar evento existente")
    @PutMapping("/{id}")
    public ResponseEntity<Evento> atualizar(@PathVariable Long id, @RequestBody Evento novo) {
        return repository.findById(id)
                .map(e -> {
                    e.setNmEvento(novo.getNmEvento());
                    e.setDsEvento(novo.getDsEvento());
                    e.setDtInicioEvento(novo.getDtInicioEvento());
                    e.setDtFimEvento(novo.getDtFimEvento());
                    e.setLocal(novo.getLocal());
                    e.setCategoria(novo.getCategoria());
                    e.setImagens(novo.getImagens());
                    return ResponseEntity.ok(repository.save(e));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @Operation(summary = "Buscar eventos por intervalo de datas")
    @GetMapping("/intervalo")
    public ResponseEntity<List<Evento>> buscarPorIntervalo(
            @RequestParam LocalDate inicio,
            @RequestParam LocalDate fim
    ) {
        List<Evento> eventos = repository.buscarEventosEntre(inicio, fim);
        if (eventos.isEmpty()) return ResponseEntity.noContent().build();
        return ResponseEntity.ok(eventos);
    }

    @PatchMapping("/{id}/imagens")
    @Operation(
            summary = "Adicionar novas imagens ao evento",
            description = "Adiciona novas URLs de imagem à lista existente do evento."
    )
    public ResponseEntity<Evento> adicionarImagens(
            @PathVariable Long id,
            @RequestBody List<String> novasImagens) {

        return repository.findById(id)
                .map(evento -> {
                    List<String> imagensAtuais = evento.getImagens();
                    if (imagensAtuais == null) {
                        imagensAtuais = novasImagens;
                    } else {
                        imagensAtuais.addAll(novasImagens);
                    }

                    evento.setImagens(imagensAtuais);
                    return ResponseEntity.ok(repository.save(evento));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    @Operation(
            summary = "Listar imagens do evento",
            description = "Retorna apenas as URLs das imagens associadas ao evento."
    )
    @GetMapping("/{id}/imagens")
    public ResponseEntity<List<String>> listarImagens(@PathVariable Long id) {
        return repository.findById(id)
                .<ResponseEntity<List<String>>>map(evento -> {
                    List<String> imagens = evento.getImagens();

                    if (imagens == null || imagens.isEmpty()) {
                        return ResponseEntity.noContent().build();
                    }

                    return ResponseEntity.ok(imagens);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }



}
